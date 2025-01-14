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

  type SingleProperty {
    required price: int32;
    required propertyType: PropertyType;
    required lease: str{
        constraint one_of ('Buy', 'Rent');
    }
    required propertyArea: PropertyArea;
    required developer: developer;
    required size: int32;
    excerpt: str;
    featured: bool;
    badrooms: int16;
    bathrooms: int16;
  }
};