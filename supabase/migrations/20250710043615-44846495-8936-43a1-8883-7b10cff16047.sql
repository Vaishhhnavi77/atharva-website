
-- Update the reviews table to use full_name instead of name
ALTER TABLE public.reviews RENAME COLUMN name TO full_name;

-- Add user_id column if it doesn't exist (for proper authentication)
ALTER TABLE public.reviews ADD COLUMN IF NOT EXISTS user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE;

-- Make user_id NOT NULL (this may fail if there are existing records without user_id)
-- If this fails, you may need to delete existing test data first
ALTER TABLE public.reviews ALTER COLUMN user_id SET NOT NULL;

-- Update RLS policies to use the new schema
DROP POLICY IF EXISTS "Anyone can submit reviews" ON public.reviews;
DROP POLICY IF EXISTS "Public can view reviews" ON public.reviews;

-- Create new policies that match the expected schema
CREATE POLICY "Anyone can view reviews" 
  ON public.reviews 
  FOR SELECT 
  USING (true);

CREATE POLICY "Authenticated users can insert reviews" 
  ON public.reviews 
  FOR INSERT 
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own reviews" 
  ON public.reviews 
  FOR UPDATE 
  USING (auth.uid() = user_id);

CREATE POLICY "Users can delete their own reviews" 
  ON public.reviews 
  FOR DELETE 
  USING (auth.uid() = user_id);
