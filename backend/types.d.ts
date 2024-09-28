declare namespace Express {
    interface User {
      name: any;
      _json: any;
      id: string;
      displayName: string; // Confirmed property
      emails: Array<{ value: string; verified: boolean }>;
      photos: Array<{ value: string }>;
      // Add other properties as needed
    }
  
    interface Request {
      user?: User; 
    }
  }
  