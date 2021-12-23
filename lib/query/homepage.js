import { gql } from "@apollo/client";
import client from "../../apollo-client";



export async function get_homepage(){
    const { data } = await client.query({
        query: gql`
        query homepage {
          homepage {
            data {
              attributes {
                introduction {
                  id
                  title
                  subtitle
                  buttons {
                    id
                    type
                    text
                    href
                  }
                  illustration {
                    data {
                      attributes {
                        name
                        url
                      }
                    }
                  }
                }
        
                recent_audits {
                  id
                  title
                  subtitle
                  audits{
                    data{
                      id
                      attributes{
                        title
                        score
                        image{
                          data{
                            attributes{
                              name
                              url
                            }
                          }
                        }
                      }
                    }
                  }
                  buttons {
                    id
                    type
                    text
                    href
                  }
                }
                
                dapps{
                  title
                  subtitle
                  cta_link
                  cta_text
                  dapps{
                    data{
                      id
                      attributes{
                        title
                        subtitle
                        description
                        cta_link
                        cta_text
                        image{
                          data{
                            id
                            attributes{
                              name
                              url
                            }
                          }
                        }
                      }
                    }
                  }
              }

                description {
                  id
                  title
                  subtitle
                  caracteristic {
                    id
                    title
                    description
                    image {
                      data {
                        attributes {
                          name
                          url
                        }
                      }
                    }
                  }
                }
        
                community {
                  id
                  title
                  subtitle
                  social {
                    id
                    name
                    url
                    logo{
                      data{
                        attributes{
                          name
                          url
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
        
        `,
      })
      return data.homepage.data
}
