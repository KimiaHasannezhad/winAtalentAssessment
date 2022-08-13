import Dropdown from '../components/Dropdown'

export default function Home(props) {

  const { data } = props
  return (
    <div >
      <Dropdown title="industry" data={data} />
    </div>
  )
}

export async function getStaticProps() {
  const listedData = await fetch(`https://api.coinpaprika.com/v1/coins`)
  const data = await listedData.json();
  return {
    props: { data },
  }
}
