import React from "react"
import styles from './styles.module.css'

export default function premium() {
    return (
        <div className={`w-screen ${styles["textform"]}`}>
            <div id="premium" className="flex flex-col justify-center items-center bg-blue-600 p-6">
                <p className="text-white text-xl">Enjoy impressive cost reductions on your hiring budget.</p>
                <p className="text-white text-3xl mt-3">Post <span className={styles["underlined"]}>unlimited</span> premium internships and jobs</p>
                <div className="flex flex-wrap gap-x-16 gap-y-4 justify-center items-center mt-9">
                    <div className="bg-white pt-4 pb-5 text-left pr-14 pl-4 rounded-2xl">
                        <p className="font-semibold">1 Month Plan</p>
                        <hr className="mt-3" />
                        <p className="text-3xl mt-6 font-semibold mb-2">&#8377; 5,999</p>
                        <p className="text-sm text-gray-500"><s>&#8377; 6,999</s> <span className="bg-blue-200 text-blue-500 text-sm px-2 rounded-2xl ml-2">Save 15%</span></p>
                        <button className="mt-5 text-white bg-orange-400 rounded-md width-full px-14 py-1">Buy now</button>
                    </div>
                    <div className="bg-white pt-4 pb-5 text-left pr-14 pl-4 rounded-2xl">
                        <p className="font-semibold">6 Month Plan</p>
                        <hr className="mt-3" />
                        <p className="text-3xl mt-6 font-semibold mb-2">&#8377;29,999</p>
                        <p className="text-sm text-gray-500"><s>&#8377; 41,999</s> <span className="bg-blue-200 text-blue-500 text-sm px-2 rounded-2xl ml-2">Save 29%</span></p>
                        <button className="mt-5 text-white bg-orange-400 rounded-md width-full px-14 py-1">Buy now</button>
                    </div>
                    <div className="bg-white pt-4 pb-5 text-left pr-12 pl-4 rounded-2xl">
                        <p className="font-semibold">1 Year Plan <span className="bg-yellow-300 px-4 py-1 text-gray-600  mb-3 rounded-3xl w-fit ml-2 text-sm">Popular</span></p>
                        <hr className="mt-3" />
                        <p className="text-3xl mt-6 font-semibold mb-2">&#8377; 34,999</p>
                        <p className="text-sm text-gray-500"><s>&#8377; 83,999</s> <span className="bg-yellow-300 text-gray-500 text-sm px-2 rounded-2xl ml-2">Save 58%</span></p>
                        <button className="mt-5 text-white bg-orange-400 rounded-md width-full px-14 py-1">Buy now</button>
                    </div>
                </div>
                <div className="bg-white rounded-2xl mt-12 px-6 py-4 mb-8">
                    <p className="text-lg">Have custom hiring requirements? Explore the best solutions and offers <a href="/ContactUs"><button className="px-5 ml-2 mt-1 py-1 bg-orange-500 rounded-md text-white">Contact Us</button></a></p>
                </div>
            </div>
            <div className="bg-white pt-10 p-6">
                <p className="text-2xl font-semibold text-gray-700">Now enjoy premium benefits for all your internships and jobs</p>
                <div class={styles["table"]}>
                    <div class={styles["table-cell"]}></div>
                    <div class={`${styles["table-cell"]} ${styles["plattform"]}`}>
                        <h3>FREE</h3>
                    </div>
                    <div class={`${styles["table-cell"]} ${styles["enterprise"]}`}>
                        <h3>PREMIUM</h3>
                    </div>
                    <div class={`${styles["table-cell"]} ${styles["cell-feature"]}`}>Best-in-class product offering a comprehensive suite of features, including interview scheduling and assignment tools.</div>
                    <div class={styles["table-cell"]}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="limegreen" class="bi bi-check2" viewBox="0 0 15 15">
                            <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
                        </svg>
                    </div>
                    <div class={styles["table-cell"]}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="darkslateblue" class="bi bi-check2" viewBox="0 0 15 15">
                            <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
                        </svg>
                    </div>
                    <div class={`${styles["table-cell"]} ${styles["cell-feature"]}`}>Number of internship or job listings in a month</div>
                    <div class={styles["table-cell"]}>
                        <p style={{ color: "limegreen" }} className="text-left text-lg font-semibold">Limited</p>
                    </div>
                    <div class={styles["table-cell"]}>
                        <p className="text-left text-lg text-gray-700 font-semibold">Unlimited</p>
                    </div>
                    <div class={`${styles["table-cell"]} ${styles["cell-feature"]}`}>Maximized visibility for all posts.</div>
                    <div class={styles["table-cell"]}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="limegreen" class="bi bi-x" viewBox="0 0 15 15">
                            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                        </svg>
                    </div>
                    <div class={styles["table-cell"]}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="darkslateblue" class="bi bi-check2" viewBox="0 0 15 15">
                            <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
                        </svg>
                    </div>
                    <div class={`${styles["table-cell"]} ${styles["cell-feature"]}`}>Efficient database retrieval for every internship and job opening.</div>
                    <div class={styles["table-cell"]}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="limegreen" class="bi bi-x" viewBox="0 0 15 15">
                            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                        </svg>
                    </div>
                    <div class={styles["table-cell"]}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="darkslateblue" class="bi bi-check2" viewBox="0 0 15 15">
                            <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
                        </svg>
                    </div>
                    <div class={`${styles["table-cell"]} ${styles["cell-feature"]}`}>Unlock premium perks, such as access to contact details and the ability to export data to Excel.</div>
                    <div class={styles["table-cell"]}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="limegreen" class="bi bi-x" viewBox="0 0 15 15">
                            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                        </svg>
                    </div>
                    <div class={styles["table-cell"]}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="darkslateblue" class="bi bi-check2" viewBox="0 0 15 15">
                            <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
                        </svg>
                    </div>
                    <div class={`${styles["table-cell"]} ${styles["cell-feature"]}`}>CV Building, Mentorship and Skill enhancement </div>
                    <div class={styles["table-cell"]}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="limegreen" class="bi bi-x" viewBox="0 0 15 15">
                            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                        </svg>
                    </div>
                    <div class={styles["table-cell"]}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="darkslateblue" class="bi bi-check2" viewBox="0 0 15 15">
                            <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
                        </svg>
                    </div>
                </div>
                <a href="#premium"><button className="text-white text-md bg-blue-500 px-32 py-3 rounded-sm mt-8 mb-8">Choose a plan</button></a>
                <p className="text-gray-600 text-lg mb-10">For any queries, reach out to us at <span className="text-gray-900">+91-7428376300</span> or mail us at <span className="text-gray-900">info@gradup.in</span> available from Mon-Fri, 9:30 AM to 6:30 PM</p>
            </div>
        </div>
    )
}