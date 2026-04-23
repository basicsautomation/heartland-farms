import Types "../types";
import List "mo:core/List";
import Time "mo:core/Time";

module {
  public func submit(
    submissions : List.List<Types.ContactSubmission>,
    nextId : Nat,
    name : Text,
    email : Text,
    message : Text,
    phone : ?Text,
  ) : (Nat, Types.ContactSubmission) {
    let submission : Types.ContactSubmission = {
      id = nextId;
      name;
      email;
      message;
      phone;
      timestamp = Time.now();
    };
    submissions.add(submission);
    (nextId + 1, submission);
  };

  public func count(submissions : List.List<Types.ContactSubmission>) : Nat {
    submissions.size();
  };
};
