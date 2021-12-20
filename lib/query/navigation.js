import { gql } from "@apollo/client";
import client from "../../apollo-client";


export async function get_navigation(){
    const { data } = await client.query({
        query: gql`
            query navigation {
                navigations{
                    data{
                        id
                        attributes{
                        title
                        slug
                        }
                    }
                }
            }
        `,
      })
      return data.navigations
}
