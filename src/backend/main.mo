import List "mo:core/List";
import Runtime "mo:core/Runtime";

actor {
  type Post = {
    name : Text;
    comment : Text;
  };

  let posts = List.empty<Post>();

  public shared ({ caller }) func addPost(name : Text, comment : Text) : async () {
    if (name.size() > 32) {
      Runtime.trap("Name must be less than 32 characters");
    };
    if (comment.size() > 500) {
      Runtime.trap("Comment must be less than 500 characters");
    };
    let newPost = { name; comment };
    posts.add(newPost);
  };

  public query ({ caller }) func getPosts() : async [Post] {
    posts.toArray();
  };
};
