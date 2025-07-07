
-- Create table to store enrollment form submissions
CREATE TABLE public.enrollments (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  course_interest TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security (RLS)
ALTER TABLE public.enrollments ENABLE ROW LEVEL SECURITY;

-- Create policy to allow inserting enrollment data (public access for form submissions)
CREATE POLICY "Anyone can submit enrollment forms" 
  ON public.enrollments 
  FOR INSERT 
  WITH CHECK (true);

-- Create policy for viewing enrollments (you can restrict this later for admin access)
CREATE POLICY "Public can view enrollments" 
  ON public.enrollments 
  FOR SELECT 
  USING (true);
