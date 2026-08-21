import { useConvexAuth, useMutation, useQuery } from "convex/react"
import { useEffect } from "react"
import { api } from "@convex/_generated/api"

export function useCurrentUser() {
  const { isLoading, isAuthenticated } = useConvexAuth()
  const user = useQuery(api.users.current)
  const ensureCurrentUser = useMutation(api.users.ensureCurrentUser)

  useEffect(() => {
    if (isAuthenticated && user === null) {
      void ensureCurrentUser()
    }
  }, [ensureCurrentUser, isAuthenticated, user])

  // Combine the authentication state with the user existence check
  return {
    isLoading: isLoading || (isAuthenticated && user === null),
    isAuthenticated: isAuthenticated && user !== null,
  }
}
