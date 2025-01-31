module default {
  type User {
    required property email -> str {
      constraint exclusive;
    }
    required property password_hash -> str;
    required property name -> str;
    required property phone -> str;
  }

  type Session {
    required property token -> str {
      constraint exclusive;
    }
    required link user -> User;
    required property created_at -> datetime {
      default := (datetime_current());
    }
  }
}