"use client"
import {Enabled, QueryFunction, QueryKey, useQuery,} from "@tanstack/react-query";

export const useQueryData = (queryKey : QueryKey, queryFn: QueryFunction, enabled?: Enabled, refetchInterval?: number) => {
    const {data, isPending, isFetched, refetch, isFetching} = useQuery({queryKey, queryFn, enabled, refetchInterval});

    return {data, isPending, isFetched, refetch, isFetching}
}