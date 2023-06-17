import { Card, Grid, Text, Link } from "@nextui-org/react";
import BadgeIcon from '@mui/icons-material/Badge';
import BusinessIcon from '@mui/icons-material/Business';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
export default function AlumniCard({data}) {
  return (
      <Card css={{mt:"$10",mb:"$10",borderRadius:"50px",boxShadow:"rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px"}}>
      <Card.Header css={{display:"flex",flexDirection:"column",justifyContent:"center",background:"#82B7F8"}}>
        <img 
          className="rounded-full p-2"
          alt="nextui logo"
          src={data.profilePhoto}
          width="120px"
          height="120px"
        />
        <Grid.Container css={{ pl: "$6" }}>
          <Grid xs={12} css={{display:"flex",justifyContent:"center"}}>
            <Text h4 b css={{ lineHeight: "$xs",pb:"$4"}}>
            {data.name}
            </Text>
          </Grid>
        </Grid.Container>
      </Card.Header>
      <Card.Body css={{ py: "$5",mt:"$4",fontSize:"$xs"}}>
        <Text css={{marginLeft:"$6",display:"flex",justifyContent:"space-evenly"}}>
          <div>
          <BusinessIcon color="primary" sx={{marginBottom:"5px"}}/> GradUp{data.companyName} <br /></div>
          <div>
          <PhoneAndroidIcon color="primary" sx={{marginBottom:"5px"}}/> +91-94********
          </div>
        </Text>
      </Card.Body>
      <Card.Footer css={{marginTop:"",display:"flex",justifyContent:"center"}}>
        <Link css={{backgroundColor:"WhiteSmoke",padding:"$1 $10",float:"right",borderRadius:"$2xl",border:"2px solid deepskyblue"}}
          icon
          target="_blank"
          href="https://github.com/nextui-org/nextui"
        >
          Contact
        </Link>
      </Card.Footer>
    </Card>
  );
}
