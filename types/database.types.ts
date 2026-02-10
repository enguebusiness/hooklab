// Types pour la base de données Supabase
export type Database = {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string;
          email: string;
          full_name: string | null;
          persona: "jeune" | "parent" | null;
          stripe_customer_id: string | null;
          subscription_status: "inactive" | "active" | "cancelled" | "paused";
          subscription_end_date: string | null;
          is_admin: boolean;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id: string;
          email: string;
          full_name?: string | null;
          persona?: "jeune" | "parent" | null;
          stripe_customer_id?: string | null;
          subscription_status?: "inactive" | "active" | "cancelled" | "paused";
          subscription_end_date?: string | null;
          is_admin?: boolean;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          email?: string;
          full_name?: string | null;
          persona?: "jeune" | "parent" | null;
          stripe_customer_id?: string | null;
          subscription_status?: "inactive" | "active" | "cancelled" | "paused";
          subscription_end_date?: string | null;
          is_admin?: boolean;
          updated_at?: string;
        };
      };
      candidatures: {
        Row: {
          id: string;
          email: string;
          firstname: string;
          phone: string;
          persona: string;
          age: number;
          experience: string;
          time_daily: string;
          availability: string;
          start_date: string;
          motivation: string;
          monthly_goal: string;
          biggest_fear: string;
          tiktok_username: string | null;
          status: "pending" | "approved" | "rejected";
          created_at: string;
        };
        Insert: {
          id?: string;
          email: string;
          firstname: string;
          phone: string;
          persona: string;
          age: number;
          experience: string;
          time_daily: string;
          availability: string;
          start_date: string;
          motivation: string;
          monthly_goal: string;
          biggest_fear: string;
          tiktok_username?: string | null;
          status?: "pending" | "approved" | "rejected";
          created_at?: string;
        };
        Update: {
          email?: string;
          firstname?: string;
          phone?: string;
          persona?: string;
          age?: number;
          experience?: string;
          time_daily?: string;
          availability?: string;
          start_date?: string;
          motivation?: string;
          monthly_goal?: string;
          biggest_fear?: string;
          tiktok_username?: string | null;
          status?: "pending" | "approved" | "rejected";
        };
      };
      modules: {
        Row: {
          id: string;
          title: string;
          description: string | null;
          week_number: number;
          order_index: number;
          content_type: "video" | "pdf" | "text" | "quiz" | null;
          content_url: string | null;
          duration_minutes: number | null;
          is_published: boolean;
          created_at: string;
        };
        Insert: {
          id?: string;
          title: string;
          description?: string | null;
          week_number: number;
          order_index: number;
          content_type?: "video" | "pdf" | "text" | "quiz" | null;
          content_url?: string | null;
          duration_minutes?: number | null;
          is_published?: boolean;
          created_at?: string;
        };
        Update: {
          title?: string;
          description?: string | null;
          week_number?: number;
          order_index?: number;
          content_type?: "video" | "pdf" | "text" | "quiz" | null;
          content_url?: string | null;
          duration_minutes?: number | null;
          is_published?: boolean;
        };
      };
      user_progress: {
        Row: {
          id: string;
          user_id: string;
          module_id: string;
          completed: boolean;
          completed_at: string | null;
          notes: string | null;
          created_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          module_id: string;
          completed?: boolean;
          completed_at?: string | null;
          notes?: string | null;
          created_at?: string;
        };
        Update: {
          completed?: boolean;
          completed_at?: string | null;
          notes?: string | null;
        };
      };
      payments: {
        Row: {
          id: string;
          user_id: string;
          stripe_payment_intent_id: string;
          amount: number;
          currency: string;
          status: string;
          metadata: Record<string, unknown> | null;
          created_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          stripe_payment_intent_id: string;
          amount: number;
          currency?: string;
          status: string;
          metadata?: Record<string, unknown> | null;
          created_at?: string;
        };
        Update: {
          status?: string;
          metadata?: Record<string, unknown> | null;
        };
      };
    };
  };
};

// Types helpers
export type Profile = Database["public"]["Tables"]["profiles"]["Row"];
export type Candidature = Database["public"]["Tables"]["candidatures"]["Row"];
export type CandidatureInsert = Database["public"]["Tables"]["candidatures"]["Insert"];
export type Module = Database["public"]["Tables"]["modules"]["Row"];
export type UserProgress = Database["public"]["Tables"]["user_progress"]["Row"];
export type Payment = Database["public"]["Tables"]["payments"]["Row"];
export type ModuleInsert = Database["public"]["Tables"]["modules"]["Insert"];
export type ModuleUpdate = Database["public"]["Tables"]["modules"]["Update"];
