export interface User {
  id: string;
  username: string;
  pseudo: string; // Optionnel, utilisé pour les utilisateurs existants
  firstName: string;
  lastName: string;
  email: string;
  password?: string;
  avatar?: string;
  roles: string[];
  isVerified: boolean;
  createdAt?: string;
  updatedAt?: string;
}
