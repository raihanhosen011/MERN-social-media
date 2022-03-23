import DataProvider from "../../redux/store"
import GlobalActions from '../Global'

function Index({ children }) {
  return (
    <>
      <DataProvider>
        
        {children}
        <GlobalActions />

      </DataProvider>
    </>
  )
}

export default Index