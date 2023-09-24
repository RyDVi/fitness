import React, { useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export type Queries<Key extends string = string> = Record<Key, any>;

export function useQuery<Params extends Queries>(): Record<
  keyof Params,
  string
> {
  const { search } = useLocation();
  return useMemo(
    () => Object.fromEntries([...new URLSearchParams(search)]),
    [search]
  ) as Params;
}

export function useSetQuery<Params extends Queries>() {
  const navigate = useNavigate();
  const location = useLocation();
  return React.useCallback(
    (queries: Params, replace?: "replace" | "push") => {
      navigate(
        {
          pathname: location.pathname,
          search: new URLSearchParams(queries).toString(),
        },
        { replace: replace === "replace" }
      );
    },
    [location.pathname, navigate]
  );
}

export function useUpsertQuery<Params extends Queries>() {
  const query = useQuery<Params>();
  const setQuery = useSetQuery<Params>();
  return React.useCallback(
    (queries: Params, replace?: "replace" | "push") =>
      setQuery({ ...query, ...queries }, replace),
    [query, setQuery]
  );
}

export function useQueryActions<Params extends Queries>(): [
  ReturnType<typeof useQuery<Params>>,
  ReturnType<typeof useUpsertQuery<Params>>,
  ReturnType<typeof useSetQuery<Params>>
] {
  const query = useQuery<Params>();
  const upsertQuery = useUpsertQuery<Params>();
  const setQuery = useSetQuery<Params>();
  return [query, upsertQuery, setQuery];
}
