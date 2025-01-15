module properties {
  type PropertyType {
    required name: str{
        constraint exclusive;
    }
  }
  type PropertyArea {
    required name: str{
        constraint exclusive;
    }
    image: str;
  }
  type developer {
    required name: str{
        constraint exclusive;
    }
    image: str;
    logo: str;
  }
  type button {
    text:str;
    url:str;
  }

  type SingleProperty {
    required price: int32;
    required propertyType: PropertyType;
    required lease: str{
        constraint one_of ('buy', 'rent');
    }
    required propertyArea: PropertyArea;
    required developer: developer;
    required size: int32;
    excerpt: str;
    featured: bool;
    bedrooms: int16;
    bathrooms: int16;
    multi images: str;
    multi buttons: button;
    REQUIRED PROPERTY created_at -> datetime {
        default := (datetime_current());
    };
  }
};