import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { Comment, fetchComments, addComment } from '@/lib/supabase';

const CommentsPage: React.FC = () => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const loadComments = async () => {
      try {
        setIsLoading(true);
        const data = await fetchComments();
        setComments(data);
      } catch (error) {
        console.error('Failed to load comments:', error);
        toast({
          title: "Error",
          description: "Failed to load comments. Please try again later.",
          variant: "destructive"
        });
      } finally {
        setIsLoading(false);
      }
    };

    loadComments();
  }, [toast]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim() || !message.trim()) {
      toast({
        title: "Please fill in all fields",
        description: "Both name and message are required.",
        variant: "destructive"
      });
      return;
    }

    try {
      setIsLoading(true);
      const newComment = await addComment(name.trim(), message.trim());
      setComments([newComment, ...comments]);
      setName('');
      setMessage('');

      toast({
        title: "Comment posted!",
        description: "Thank you for your feedback. Your comment has been added."
      });
    } catch (error) {
      console.error('Failed to post comment:', error);
      let errorMessage = 'Failed to post comment. Please try again later.';
      
      if (error instanceof Error) {
        if (error.message.includes('permission denied')) {
          errorMessage = 'Permission denied. Please check your Supabase RLS policies.';
        } else if (error.message.includes('network')) {
          errorMessage = 'Network error. Please check your internet connection.';
        } else if (error.message.includes('JWT')) {
          errorMessage = 'Authentication error. Please check your Supabase configuration.';
        } else {
          errorMessage = error.message || errorMessage;
        }
      }
      
      toast({
        title: "Error",
        description: errorMessage,
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8" data-id="wws0qeheh" data-path="src/pages/CommentsPage.tsx">
      {/* Hero Section */}
      <section className="max-w-4xl mx-auto text-center mb-16" data-id="89vtwziw7" data-path="src/pages/CommentsPage.tsx">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-600 to-blue-600 bg-clip-text text-transparent" data-id="l1lp2afnb" data-path="src/pages/CommentsPage.tsx">
          Comments & Feedback
        </h1>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed" data-id="ksxrshm9s" data-path="src/pages/CommentsPage.tsx">
          Share your thoughts, experiences, and suggestions. Your feedback helps us improve and create better content for Chinese learners.
        </p>
      </section>

      <div className="max-w-4xl mx-auto" data-id="knqnnuz0m" data-path="src/pages/CommentsPage.tsx">
        {/* Comment Form */}
        <Card className="bg-white/80 backdrop-blur-sm border-orange-200 mb-12" data-id="1tmx5jgen" data-path="src/pages/CommentsPage.tsx">
          <CardHeader data-id="1kb3mglxr" data-path="src/pages/CommentsPage.tsx">
            <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2" data-id="y2xohlrc4" data-path="src/pages/CommentsPage.tsx">
              💬 Leave a Comment
            </h2>
            <p className="text-gray-600" data-id="0fp6q7oey" data-path="src/pages/CommentsPage.tsx">No registration required - just share your thoughts!</p>
          </CardHeader>
          <CardContent data-id="oaxved64i" data-path="src/pages/CommentsPage.tsx">
            <form onSubmit={handleSubmit} className="space-y-6" data-id="jyct9n9fa" data-path="src/pages/CommentsPage.tsx">
              <div data-id="9up1ckd5l" data-path="src/pages/CommentsPage.tsx">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2" data-id="59xh0fmih" data-path="src/pages/CommentsPage.tsx">
                  Your Name
                </label>
                <Input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your name"
                  className="border-orange-200 focus:border-orange-400 bg-white/80" data-id="oussbhl72" data-path="src/pages/CommentsPage.tsx" />

              </div>
              
              <div data-id="qfvsts02q" data-path="src/pages/CommentsPage.tsx">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2" data-id="tf8b2x528" data-path="src/pages/CommentsPage.tsx">
                  Your Message
                </label>
                <Textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Share your thoughts, experiences, or suggestions..."
                  rows={4}
                  className="border-orange-200 focus:border-orange-400 bg-white/80" data-id="upu6s1e0a" data-path="src/pages/CommentsPage.tsx" />

              </div>
              
              <Button
                type="submit"
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-orange-500 to-blue-500 hover:opacity-90 text-white font-semibold py-3" data-id="h113kn4xd" data-path="src/pages/CommentsPage.tsx">
                {isLoading ? 'Posting...' : 'Post Comment 📝'}
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Comments List */}
        {comments.length > 0 &&
        <div className="space-y-6" data-id="tvuh37j07" data-path="src/pages/CommentsPage.tsx">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2" data-id="6cntcar4l" data-path="src/pages/CommentsPage.tsx">
              💭 Recent Comments ({comments.length})
            </h2>
            
            {comments.map((comment) =>
          <Card key={comment.id} className="bg-white/80 backdrop-blur-sm border-orange-200 hover:shadow-md transition-shadow" data-id="6firdx5k5" data-path="src/pages/CommentsPage.tsx">
                <CardContent className="py-6" data-id="1dyr1jpo2" data-path="src/pages/CommentsPage.tsx">
                  <div className="flex items-start gap-4" data-id="uq99nak9e" data-path="src/pages/CommentsPage.tsx">
                    <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-blue-400 rounded-full flex items-center justify-center text-white font-bold text-lg" data-id="y9cc8k4qj" data-path="src/pages/CommentsPage.tsx">
                      {comment.name.charAt(0).toUpperCase()}
                    </div>
                    <div className="flex-1" data-id="uad0esr5r" data-path="src/pages/CommentsPage.tsx">
                      <div className="flex items-center gap-3 mb-2" data-id="uteynwtwe" data-path="src/pages/CommentsPage.tsx">
                        <h4 className="font-semibold text-gray-800" data-id="jp84712w0" data-path="src/pages/CommentsPage.tsx">{comment.name}</h4>
                        <span className="text-sm text-gray-500" data-id="j4fagb6b3" data-path="src/pages/CommentsPage.tsx">{formatDate(comment.created_at)}</span>
                      </div>
                      <p className="text-gray-700 leading-relaxed" data-id="1dsdktw3d" data-path="src/pages/CommentsPage.tsx">{comment.message}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
          )}
          </div>
        }
      </div>
    </div>);

};

export default CommentsPage;