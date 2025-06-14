
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Star } from 'lucide-react';

const Reviews = () => {
  const [reviews, setReviews] = useState([
    {
      id: 1,
      name: "Rahul Sharma",
      course: "Web Development",
      rating: 5,
      review: "Excellent institute! The instructors are very knowledgeable and the course content is up-to-date. Highly recommended!",
      date: "2024-01-15"
    },
    {
      id: 2,
      name: "Priya Patel",
      course: "Python Programming",
      rating: 5,
      review: "Great learning experience. The hands-on approach really helped me understand the concepts better.",
      date: "2024-01-10"
    }
  ]);

  const [newReview, setNewReview] = useState({
    name: '',
    course: '',
    rating: 5,
    review: ''
  });

  const [showForm, setShowForm] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newReview.name && newReview.course && newReview.review) {
      const review = {
        id: reviews.length + 1,
        ...newReview,
        date: new Date().toISOString().split('T')[0]
      };
      setReviews([review, ...reviews]);
      setNewReview({ name: '', course: '', rating: 5, review: '' });
      setShowForm(false);
    }
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <section id="reviews" className="py-20 bg-slate-800/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Student{' '}
            <span className="bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
              Reviews
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
            Read what our students say about their learning experience at Atharva Computer Institute.
          </p>
          
          <Button
            onClick={() => setShowForm(!showForm)}
            className="bg-gradient-to-r from-blue-500 to-teal-500 text-white hover:from-blue-600 hover:to-teal-600"
          >
            Write a Review
          </Button>
        </div>

        {showForm && (
          <Card className="max-w-2xl mx-auto mb-12 bg-slate-800/50 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white">Write Your Review</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      Your Name
                    </label>
                    <Input
                      type="text"
                      value={newReview.name}
                      onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
                      className="bg-slate-700 border-slate-600 text-white"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      Course
                    </label>
                    <Input
                      type="text"
                      value={newReview.course}
                      onChange={(e) => setNewReview({ ...newReview, course: e.target.value })}
                      className="bg-slate-700 border-slate-600 text-white"
                      placeholder="e.g., Web Development"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Rating
                  </label>
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className={`w-6 h-6 cursor-pointer ${
                          star <= newReview.rating ? 'text-yellow-400 fill-current' : 'text-gray-400'
                        }`}
                        onClick={() => setNewReview({ ...newReview, rating: star })}
                      />
                    ))}
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Your Review
                  </label>
                  <Textarea
                    value={newReview.review}
                    onChange={(e) => setNewReview({ ...newReview, review: e.target.value })}
                    className="bg-slate-700 border-slate-600 text-white"
                    rows={4}
                    placeholder="Share your experience with Atharva Computer Institute..."
                    required
                  />
                </div>
                
                <div className="flex gap-4">
                  <Button
                    type="submit"
                    className="bg-gradient-to-r from-blue-500 to-teal-500 text-white hover:from-blue-600 hover:to-teal-600"
                  >
                    Submit Review
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setShowForm(false)}
                    className="border-slate-600 text-slate-300 hover:bg-slate-700"
                  >
                    Cancel
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        )}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <Card
              key={review.id}
              className="bg-slate-800/50 border-slate-700 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  {renderStars(review.rating)}
                  <span className="text-sm text-slate-400 ml-2">{review.date}</span>
                </div>
                
                <p className="text-slate-300 mb-4 italic">
                  "{review.review}"
                </p>
                
                <div className="border-t border-slate-700 pt-4">
                  <h4 className="text-white font-semibold">{review.name}</h4>
                  <p className="text-blue-400 text-sm">{review.course}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
