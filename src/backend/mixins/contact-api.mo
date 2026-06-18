import Types "../types";
import ContactLib "../lib/Contact";
import List "mo:core/List";

mixin (
  submissions : List.List<Types.ContactSubmission>,
) {
  public func submitContact(
    name : Text,
    company : Text,
    phone : Text,
    email : Text,
    industry : Text,
    message : Text,
  ) : async Nat {
    let nextId = submissions.size();
    let _ = ContactLib.submit(submissions, nextId, name, company, phone, email, industry, message);
    ContactLib.count(submissions);
  };

  public query func getContactSubmissionCount() : async Nat {
    ContactLib.count(submissions);
  };
};
