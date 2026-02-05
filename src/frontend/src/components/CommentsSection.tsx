import { useState } from 'react';
import { useGetPosts, useAddPost } from '../hooks/usePosts';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Card, CardContent } from './ui/card';
import { Label } from './ui/label';
import { Loader2 } from 'lucide-react';

export default function CommentsSection() {
    const [name, setName] = useState('');
    const [comment, setComment] = useState('');
    const [formError, setFormError] = useState('');

    const { data: posts = [], isLoading: isLoadingPosts } = useGetPosts();
    const addPostMutation = useAddPost();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setFormError('');

        // Validation
        if (!name.trim()) {
            setFormError('Please enter your name');
            return;
        }
        if (name.length > 32) {
            setFormError('Name must be less than 32 characters');
            return;
        }
        if (!comment.trim()) {
            setFormError('Please enter a comment');
            return;
        }
        if (comment.length > 500) {
            setFormError('Comment must be less than 500 characters');
            return;
        }

        try {
            await addPostMutation.mutateAsync({ name: name.trim(), comment: comment.trim() });
            setName('');
            setComment('');
        } catch (error) {
            setFormError(error instanceof Error ? error.message : 'Failed to submit comment');
        }
    };

    return (
        <section id="comments" className="section-container">
            <div className="max-w-4xl mx-auto">
                <h2 className="heading-secondary text-center mb-12">
                    Leave a Comment
                </h2>

                {/* Comment Submission Form */}
                <Card className="mb-12 border-2 border-primary/20">
                    <CardContent className="pt-6">
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <Label htmlFor="name" className="text-base">
                                    Your Name
                                </Label>
                                <Input
                                    id="name"
                                    type="text"
                                    placeholder="Enter your name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    maxLength={32}
                                    className="mt-1.5"
                                    disabled={addPostMutation.isPending}
                                />
                            </div>

                            <div>
                                <Label htmlFor="comment" className="text-base">
                                    Your Comment
                                </Label>
                                <Textarea
                                    id="comment"
                                    placeholder="Share your thoughts and wishes..."
                                    value={comment}
                                    onChange={(e) => setComment(e.target.value)}
                                    maxLength={500}
                                    rows={4}
                                    className="mt-1.5 resize-none"
                                    disabled={addPostMutation.isPending}
                                />
                                <p className="text-xs text-muted-foreground mt-1">
                                    {comment.length}/500 characters
                                </p>
                            </div>

                            {formError && (
                                <p className="text-sm text-destructive">{formError}</p>
                            )}

                            <Button
                                type="submit"
                                disabled={addPostMutation.isPending}
                                className="w-full sm:w-auto"
                            >
                                {addPostMutation.isPending ? (
                                    <>
                                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                        Submitting...
                                    </>
                                ) : (
                                    'Submit Comment'
                                )}
                            </Button>
                        </form>
                    </CardContent>
                </Card>

                {/* Comments Display */}
                <div>
                    <h3 className="text-xl font-semibold mb-6 text-center">
                        Visitor Comments
                    </h3>

                    {isLoadingPosts ? (
                        <div className="flex justify-center py-12">
                            <Loader2 className="h-8 w-8 animate-spin text-primary" />
                        </div>
                    ) : posts.length === 0 ? (
                        <p className="text-center text-muted-foreground py-12">
                            No comments yet. Be the first to leave a comment!
                        </p>
                    ) : (
                        <div className="grid gap-6 md:grid-cols-2">
                            {posts.map((post, index) => (
                                <div
                                    key={index}
                                    className="bg-card border border-border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
                                >
                                    <p className="text-muted-foreground mb-4 leading-relaxed">
                                        {post.comment}
                                    </p>
                                    <div className="flex items-center">
                                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                                            <span className="text-primary font-semibold text-lg">
                                                {post.name ? post.name.charAt(0).toUpperCase() : '?'}
                                            </span>
                                        </div>
                                        <p className="font-medium text-foreground">
                                            {post.name}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
