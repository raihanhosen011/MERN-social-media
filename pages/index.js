import withAuth from "./HOC/withAuth"

import Sidebar from '@components/layout/Sidebar'
import Story from '@components/layout/Story'
import CreatePost from '@components/layout/CreatePost'
import Feeds from '@components/layout/Feeds'
import SuggestionsHome from "@components/layout/SuggestionUser/SuggestionsHome"

import Header from '@components/layout/Header'
import { SHome } from "@components/Home/home.styled"
import { Column, Columns } from '@components/shared/global.styled'

function Home() {
  return (
    <>
      <Header />

      <SHome>
        <Columns>

          <Column className='is-3' >
            <Sidebar />
          </Column>

          <Column className='is-6' >
            <Story />
            <CreatePost />
            <Feeds />
          </Column>

          <Column className='is-3' >
             <SuggestionsHome />
          </Column>

        </Columns>       
      </SHome>  
    </>
  )
}

export default withAuth(Home)