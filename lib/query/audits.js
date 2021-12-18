import { gql } from "@apollo/client";
import client from "../../apollo-client";


export async function get_audits(){
    const { data } = await client.query({
        query: gql`
            query audits {
                audits{
                    data{
                      id
                      attributes{
                        title
                        score
                        description
                        image{
                          data{
                            attributes{
                              name
                              url
                            }
                          }
                        }
                        publishedAt
                      }
                    }
                }
            }
        `,
      })
      return data.audits
}
