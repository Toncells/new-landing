import { Launch, HeaderContainer, Logo, RoadmapList } from './styles'

const loadImage = (imageName: string) => {
  return require('../../static/img/' + imageName) as any
};

const Body = () => {
  return (
    <HeaderContainer >
      <h1>toncells</h1>
      <h3>
editable nft collection on ton
</h3>
      <span>
        <a href={"https://2.toncells.org"}>app toncells v2 (new version)</a>
<br />
        <a href={"https://app.toncells.org"}>app toncells v1 (old version)</a>
<br />
        <a href={"https://info.toncells.org"}>landing page toncells v1 (old version)</a>
<br />
        <a href={"https://t.me/toncells"}>toncells tg</a>
<br />
        <a href={"https://x.com/toncells"}>toncells on x</a>
<br />
<br />
created by <a href={"https://sepezho.com"}>sepezho</a>
  </span>
    </HeaderContainer >
  )
}

export default Body;
