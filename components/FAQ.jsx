import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function BasicAccordion() {
    return (
        <div>
            <p className="text-center text-white animate-charcter textnew text-4xl font-semibold mt-12">FREQUENTLY ASKED QUESTIONS (FAQ's)</p>
            <div className="w-full flex displaystyle items-center">
                <div className="hideimage">
                    <img className="m-auto" style={{ height: "60vh" }} width="400" src="/assets/images/faqnew.png"></img>
                </div>
                <div className="widthsetter2 mt-14 mb-6 p-4 bg-sky-800 textnew">
                    <div className='text-left'>
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography>Q. How to search for work from home jobs in my preferred category/profile?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    You can update your preferences (profile or location) and use relevant filters to find work from home job openings in your preferred profile/location.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel2a-content"
                                id="panel2a-header"
                            >
                                <Typography>Q. What is the salary range that I can expect for work from home jobs and internships on Gradup?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    All online jobs from home opportunities on GradUp come with a salary range of ₹10073 to ₹98979 per month in India and all work from home internships come with a minimum stipend of INR 1,000 per month.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel3a-content"
                                id="panel3a-header"
                            >
                                <Typography>Q. How can I apply for work from home jobs on GradUp?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    You can apply for a job on GradUp by following these steps-<br />
                                    1) Click on 'View Details' to get details about the company and the profile.<br />
                                    2) Go through the details thoroughly and apply for jobs where your profile matches the requirements of the company.<br />
                                    3) Click on 'Apply Now' and follow the steps to submit your application.<br />
                                    If you are not registered on GradUp, register yourself today to find your dream job.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel3a-content"
                                id="panel3a-header"
                            >
                                <Typography>Q. Do I need to pay to apply for a job on GradUp?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Absolutely not! GradUp is a free platform. You don't have to pay anything to apply for jobs on GradUp.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel3a-content"
                                id="panel3a-header"
                            >
                                <Typography>Q. What all jobs are available on GradUp?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    You can find 5,000+ jobs, fresher jobs, part time jobs and work from home jobs vacancies in your preferred location or profile on GradUp.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel3a-content"
                                id="panel3a-header"
                            >
                                <Typography>Q. Are there any courses that offers a placement guarantee?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    There are following courses for a placement guarantee -<br />
                                    1)Digital Marketing course with placement<br />
                                    2)Data Science course with placement<br />
                                    3)Full Stack Developer course with placement<br />
                                    4)Product Management course with placement<br />
                                    5)UI UX Design course with placement<br />
                                    6)HR Course with placement<br />
                                    7)Business Development course with placement
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel3a-content"
                                id="panel3a-header"
                            >
                                <Typography>Q. How do I get certified online?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    GradUp offers a number of certified courses to improve your skill set. Check them out here-<br />
                                    1)Web Development Course<br />
                                    2)Python Course<br />
                                    3)Ethical Hacking Course<br />
                                    4)Java Course<br />
                                    5)UI UX Design Course<br />
                                    6)Digital Marketing Course<br />
                                    7)Data Science Course and many more...
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </div>
                </div>
            </div>
        </div>
    );
}
// import React from "react"
// import { Collapse, Text } from "@nextui-org/react";
// export default function FAQ() {
//     return (
//         <div>
//         <p className="text-center text-white animate-charcter textnew text-4xl font-semibold mt-12">FREQUENTLY ASKED QUESTIONS (FAQ's)</p>
//         <div className="w-full flex displaystyle items-center">
//         <div className="hideimage">
//         <img className="m-auto" style={{height:"60vh"}} width="400" src="/assets/images/faqnew.png"></img>
//         </div>
//         <div className="widthsetter2 mt-14 mb-6 p-4 bg-sky-800 textnew">
//             <Collapse.Group accordion={false}>
//                 <Collapse title={<Text css={{color:"white"}} >Q. How to search for work from home jobs in my preferred category/profile?</Text>}>
//                     <Text css={{color:"white",textAlign:"left"}}>
//                         You can update your preferences (profile or location) and use relevant filters to find work from home job openings in your preferred profile/location.
//                     </Text>
//                 </Collapse>
//                 <Collapse title={<Text css={{color:"white"}} >Q. What is the salary range that I can expect for work from home jobs and internships on Gradup?"</Text>}>
//                     <Text css={{color:"white",textAlign:"left"}} >
//                         All online jobs from home opportunities on GradUp come with a salary range of ₹10073 to ₹98979 per month in India and all work from home internships come with a minimum stipend of INR 1,000 per month.
//                     </Text>
//                 </Collapse>
//                 <Collapse title={<Text css={{color:"white"}} >Q. How can I apply for work from home jobs on GradUp?</Text>}>
//                     <Text css={{color:"white",textAlign:"left"}}>
//                         You can apply for a job on GradUp by following these steps-<br />
//                         1) Click on 'View Details' to get details about the company and the profile.<br />
//                         2) Go through the details thoroughly and apply for jobs where your profile matches the requirements of the company.<br />
//                         3) Click on 'Apply Now' and follow the steps to submit your application.<br />
//                         If you are not registered on GradUp, register yourself today to find your dream job.
//                     </Text>
//                 </Collapse>
//                 <Collapse title={<Text css={{color:"white"}} >Q. Do I need to pay to apply for a job on GradUp?</Text>}>
//                     <Text css={{color:"white",textAlign:"left"}}>
//                         Absolutely not! GradUp is a free platform. You don't have to pay anything to apply for jobs on GradUp.
//                     </Text>
//                 </Collapse>
//                 <Collapse title={<Text css={{color:"white"}} >Q. What all jobs are available on GradUp?</Text>}>
//                     <Text css={{color:"white",textAlign:"left"}}>
//                         You can find 5,000+ jobs, fresher jobs, part time jobs and work from home jobs vacancies in your preferred location or profile on GradUp.
//                     </Text>
//                 </Collapse>
//                 <Collapse title={<Text css={{color:"white"}} >Q. Are there any courses that offers a placement guarantee?</Text>}>
//                     <Text css={{color:"white",textAlign:"left"}}>
//                         There are following courses for a placement guarantee -<br/>
//                         1)Digital Marketing course with placement<br/>
//                         2)Data Science course with placement<br/>
//                         3)Full Stack Developer course with placement<br/>
//                         4)Product Management course with placement<br/>
//                         5)UI UX Design course with placement<br/>
//                         6)HR Course with placement<br/>
//                         7)Business Development course with placement
//                     </Text>
//                 </Collapse>
//                 <Collapse title={<Text css={{color:"white"}} >Q. How do I get certified online?</Text>}>
//                     <Text css={{color:"white",textAlign:"left"}}>
//                         GradUp offers a number of certified courses to improve your skill set. Check them out here-<br/>
//                         1)Web Development Course<br/>
//                         2)Python Course<br/>
//                         3)Ethical Hacking Course<br/>
//                         4)Java Course<br/>
//                         5)UI UX Design Course<br/>
//                         6)Digital Marketing Course<br/>
//                         7)Data Science Course and many more...
//                     </Text>
//                 </Collapse>
//             </Collapse.Group>
//         </div>
//         <div>
//         </div>
//         </div>
//         </div>
//     )
// }