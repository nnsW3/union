import { createQuery } from "@tanstack/svelte-query"
import { chainsQueryDocument } from "$lib/graphql/queries/chains"

import { request } from "graphql-request"
import { URLS } from "$lib/constants"

export const chainsQuery = (environment: string) =>
  createQuery({
    queryKey: ["chains"],
    placeholderData: (previousData, _) => previousData,
    queryFn: async () =>
      (await request(URLS().GRAPHQL, chainsQueryDocument, { environment })).v1_ibc_union_chains,
    enabled: true,
    refetchInterval: 3_600_000, // runs every hour
    refetchOnWindowFocus: false
  })
