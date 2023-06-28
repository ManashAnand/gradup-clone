import { Card, Grid, Text, Link } from "@nextui-org/react";
import BadgeIcon from '@mui/icons-material/Badge';
import BusinessIcon from '@mui/icons-material/Business';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
export default function AlumniCard({data}) {
  return (
      <Card css={{borderRadius:"20px",margin:"$10 $8",width:"320px"}}>
      <Card.Header css={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",background:"$blue900"}}>
        <img 
          style={{boxShadow:"rgb(10,60,180) 10px 6px 70px 12px"}}
          className="rounded-full mb-4"
          alt="nextui logo"
          src={data.profilePhoto}
          width="120px"
          height="120px"
        />
        <Grid.Container css={{ pl: "$6" }}>
          <Grid xs={12} css={{display:"flex",justifyContent:"center"}}>
            <Text b css={{color:"white"}}>
            {data.name}
            </Text>
          </Grid>
        </Grid.Container>
      </Card.Header>
      <Card.Body css={{ py: "$5",mt:"$4",fontSize:"$xs"}}>
        <Text css={{marginLeft:"$6",display:"flex",justifyContent:"space-evenly"}}>
          <div>
          <BusinessIcon color="primary" sx={{marginBottom:"5px"}}/> GradUp {data.companyName} <br /></div>
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
