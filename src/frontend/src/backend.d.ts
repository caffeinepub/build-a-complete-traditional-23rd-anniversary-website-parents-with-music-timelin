import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Post {
    name: string;
    comment: string;
}
export interface backendInterface {
    addPost(name: string, comment: string): Promise<void>;
    getPosts(): Promise<Array<Post>>;
}
