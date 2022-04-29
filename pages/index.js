import withAuth from "./HOC/withAuth"

function Home() {
  return (
    <div>
       Your Dashboards
    </div>
  )
}

export default withAuth(Home)