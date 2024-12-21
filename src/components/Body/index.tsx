import { HeaderContainer } from './styles'

const Body = () => {
  return (
    <HeaderContainer >
      <h1>toncells</h1>
        <h2>editable nft collection</h2>
        <span>
        it is a field of cells (v1 includes 10,000 cells, while v2 includes 1,600 cells).
        each cell is a unique nft on ton. you can mint an nft and customize it however you wish.
        the image from this nft will be displayed on the main field.
        additionally, you can edit both the description and the name of your nft simply by clicking on the cell.         
        </span>
        <h2>history:</h2>
        <span>
          toncells v1 was archived on 21.12.2024
          <br />
          toncells v2 launched on 03.12.2023
          <br />
          toncells v1 launched on 22.03.2022
        </span>
        <h2>links:</h2>
        <span>
          toncells <a href={"https://app.toncells.org"}>v2 app</a>
          <br />
          toncells <a href={"https://old.toncells.org"}>v1 app</a>
          <br />
          toncells tg <a href={"https://t.me/toncells"}>channel</a>
          <br />
          toncells on <a href={"https://x.com/toncells"}>twitter</a>
        </span>
        <br />
        <br />
        <span>
        created by <a href={"https://sepezho.com"}>sepezho</a>
        </span>
    </HeaderContainer >
  )
}

export default Body;
