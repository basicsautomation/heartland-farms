import Types "../types";
import ContactLib "../lib/Contact";
import List "mo:core/List";

mixin (
  submissions : List.List<Types.ContactSubmission>,
) {
  public func submitContact(
    name : Text,
    email : Text,
    message : Text,
    phone : ?Text,
  ) : async Nat {
    let nextId = submissions.size();
    let _ = ContactLib.submit(submissions, nextId, name, email, message, phone);
    ContactLib.count(submissions);
  };

  public query func getContactSubmissionCount() : async Nat {
    ContactLib.count(submissions);
  };
};
