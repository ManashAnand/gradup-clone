import { Card, Grid, Text, Link } from "@nextui-org/react";

const ListContentCard = ({post}) => {
  return (
     <Card css={{ p: "$3", mw: "400px",width:"96%",margin:"auto" }}>
      <Card.Header>
        <img
          alt="nextui logo"
          src={post.logo?post.logo:"/assets/images/website-icon.png"}
          width="50px"
          height="50px"
        />
        <Grid.Container css={{ pl: "$6" }}>
          <Grid xs={12}>
            <Text b h4 css={{ lineHeight: "$xs" }}>
              {post.companyName}
            </Text>
          </Grid>
          {/* <Grid xs={12}>
            <Text css={{ color: "$accents8" }}>{post.skillsRequired}</Text>
          </Grid> */}
        </Grid.Container>
      </Card.Header>
      <Card.Body css={{pt:"$4"}}>
        <Text css={{textAlign:"center",color:"$blue500",fontSize:"$md"}}>
          Hiring for {post.title}
        </Text>
      </Card.Body>
      <Card.Footer css={{display:"flex",justifyContent:"right"}}>
        <Link css={{backgroundColor:"$blue500",color:"white",px:"$10",pt:"$1",pb:"$2",borderRadius:"$lg"}}
          icon
          color="primary"
          target="_blank"
          href={`/jobs/${post._id}`}
        >
          Apply
        </Link>
      </Card.Footer>
    </Card>
  )
}

export default ListContentCard