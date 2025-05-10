import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { contactFormSchema } from "@shared/schema";
import { ZodError } from "zod";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      // Validate form data
      const data = contactFormSchema.parse(req.body);
      
      // Store contact form submission
      const result = await storage.createContactSubmission(data);
      
      // Return success
      res.status(200).json({ 
        success: true,
        message: "Contact form submitted successfully",
        data: result
      });
    } catch (error) {
      if (error instanceof ZodError) {
        const validationError = fromZodError(error);
        res.status(400).json({ 
          success: false,
          message: "Validation error",
          errors: validationError.details
        });
      } else {
        console.error("Error processing contact form:", error);
        res.status(500).json({ 
          success: false,
          message: "An error occurred processing your request" 
        });
      }
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
