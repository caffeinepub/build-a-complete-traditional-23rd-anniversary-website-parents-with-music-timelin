import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useActor } from './useActor';
import type { Post } from '../backend';

export function useGetPosts() {
  const { actor, isFetching } = useActor();

  return useQuery<Post[]>({
    queryKey: ['posts'],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getPosts();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useAddPost() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ name, comment }: { name: string; comment: string }) => {
      if (!actor) throw new Error('Actor not initialized');
      return actor.addPost(name, comment);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['posts'] });
    },
  });
}
