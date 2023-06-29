import React from "react"
import { Collapse, Text } from "@nextui-org/react";
export default function FAQ() {
    return (
        <div className="w-full my-20 p-4 bg-white textnew">
            <Collapse.Group accordion={false}>
                <Collapse title={<Text b>Q. How to search for work from home jobs in my preferred category/profile?</Text>}>
                    <Text>
                        You can update your preferences (profile or location) and use relevant filters to find work from home job openings in your preferred profile/location.
                    </Text>
                </Collapse>
                <Collapse title={<Text b>Q. What is the salary range that I can expect for work from home jobs and internships on Gradup?"</Text>}>
                    <Text>
                        All online jobs from home opportunities on GradUp come with a salary range of ₹10073 to ₹98979 per month in India and all work from home internships come with a minimum stipend of INR 1,000 per month.
                    </Text>
                </Collapse>
                <Collapse title={<Text b>Q. How can I apply for work from home jobs on GradUp?</Text>}>
                    <Text>
                        You can apply for a job on Internshala by following these steps-<br />
                        1) Click on 'View Details' to get details about the company and the profile.<br />
                        2) Go through the details thoroughly and apply for jobs where your profile matches the requirements of the company.<br />
                        3) Click on 'Apply Now' and follow the steps to submit your application.<br />
                        If you are not registered on Internshala, register yourself today to find your dream job.
                    </Text>
                </Collapse>
                <Collapse title={<Text b>Q. Do I need to pay to apply for a job on GradUp?</Text>}>
                    <Text>
                        Absolutely not! GradUp is a free platform. You don't have to pay anything to apply for jobs on GradUp.
                    </Text>
                </Collapse>
                <Collapse title={<Text b>Q. What all jobs are available on GradUp?</Text>}>
                    <Text>
                        You can find 5,000+ jobs, fresher jobs, part time jobs and work from home jobs vacancies in your preferred location or profile on Internshala.
                    </Text>
                </Collapse>
                <Collapse title={<Text b>Q. Are there any courses that offers a placement guarantee?</Text>}>
                    <Text>
                        There are following courses for a placement guarantee -<br/>
                        1)Digital Marketing course with placement<br/>
                        2)Data Science course with placement<br/>
                        3)Full Stack Developer course with placement<br/>
                        4)Product Management course with placement<br/>
                        5)UI UX Design course with placement<br/>
                        6)HR Course with placement<br/>
                        7)Business Development course with placement
                    </Text>
                </Collapse>
                <Collapse title={<Text b>Q. How do I get certified online?</Text>}>
                    <Text>
                        GradUp offers a number of certified courses to improve your skill set. Check them out here-<br/>
                        1)Web Development Course<br/>
                        2)Python Course<br/>
                        3)Ethical Hacking Course<br/>
                        4)Java Course<br/>
                        5)UI UX Design Course<br/>
                        6)Digital Marketing Course<br/>
                        7)Data Science Course.
                    </Text>
                </Collapse>
            </Collapse.Group>
        </div>
    )
}