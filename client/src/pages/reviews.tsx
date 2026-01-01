import { useQuery } from "@tanstack/react-query";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Quote, Star, Users } from "lucide-react";
import type { Review } from "@shared/schema";

const categories = ["전체", "Morning", "Reading", "Exercise", "Language"];

export default function Reviews() {
  const { data: reviews, isLoading } = useQuery<Review[]>({
    queryKey: ["/api/reviews"],
  });

  const filterReviews = (category: string) => {
    if (category === "전체") return reviews;
    return reviews?.filter((r) => r.category === category);
  };

  return (
    <div className="min-h-screen py-16 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-reviews-title">
            참여자 후기
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            "의지 → 시스템" 변화를 경험한 분들의 이야기
          </p>
        </div>

        {/* Category Tabs */}
        <Tabs defaultValue="전체" className="w-full">
          <TabsList className="flex flex-wrap justify-center gap-2 mb-8 h-auto bg-transparent">
            {categories.map((category) => (
              <TabsTrigger
                key={category}
                value={category}
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                data-testid={`tab-${category}`}
              >
                {category}
              </TabsTrigger>
            ))}
          </TabsList>

          {categories.map((category) => (
            <TabsContent key={category} value={category}>
              {isLoading ? (
                <div className="grid md:grid-cols-2 gap-6">
                  {[1, 2, 3, 4].map((i) => (
                    <Card key={i}>
                      <CardContent className="p-6">
                        <Skeleton className="h-8 w-8 mb-4" />
                        <Skeleton className="h-6 w-full mb-2" />
                        <Skeleton className="h-4 w-3/4 mb-4" />
                        <Skeleton className="h-4 w-1/2" />
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : (
                <div className="grid md:grid-cols-2 gap-6">
                  {filterReviews(category)?.map((review) => (
                    <Card key={review.id} data-testid={`card-review-${review.id}`}>
                      <CardContent className="p-6">
                        <Quote className="w-8 h-8 text-primary/30 mb-4" />
                        
                        {review.highlight && (
                          <p className="text-lg font-medium mb-4">
                            "{review.highlight}"
                          </p>
                        )}
                        
                        <p className="text-muted-foreground mb-6">
                          {review.content}
                        </p>

                        <div className="flex items-center justify-between pt-4 border-t">
                          <div className="flex items-center gap-2">
                            <Users className="w-4 h-4 text-muted-foreground" />
                            <span className="font-medium">{review.authorName}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            {review.category && (
                              <Badge variant="outline">{review.category}</Badge>
                            )}
                            <div className="flex">
                              {[...Array(review.rating || 5)].map((_, i) => (
                                <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                              ))}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}

              {filterReviews(category)?.length === 0 && (
                <div className="text-center py-12 text-muted-foreground">
                  아직 이 카테고리의 후기가 없습니다.
                </div>
              )}
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
}
