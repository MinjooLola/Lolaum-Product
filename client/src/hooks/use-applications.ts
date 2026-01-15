import { useMutation, useQueryClient } from "@tanstack/react-query";
import { api } from "@shared/routes";
import { z } from "zod";

type ApplicationInput = z.infer<typeof api.applications.create.input>;

// POST /api/applications
export function useCreateApplication() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: ApplicationInput) => {
      const res = await fetch(api.applications.create.path, {
        method: api.applications.create.method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
        credentials: "include",
      });

      if (!res.ok) {
        if (res.status === 400) {
          const error = api.applications.create.responses[400].parse(await res.json());
          throw new Error(error.message);
        }
        throw new Error("Failed to submit application");
      }
      return api.applications.create.responses[201].parse(await res.json());
    },
    onSuccess: () => {
      // Invalidate queries if needed, though this is a write-only flow mostly
    },
  });
}
