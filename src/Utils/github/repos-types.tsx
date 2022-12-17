export interface RepoConfigInterface {
  per_page: number;
  visibility: "all" | "private" | "public";
  sort: "created" | "updated" | "pushed" | "full_name";
  direction: "asc" | "desc";
  page: number;
  // since: string;
}
