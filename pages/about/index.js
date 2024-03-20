import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import Typography from "@mui/material/Typography";
import TimelineOppositeContent, {timelineOppositeContentClasses,} from "@mui/lab/TimelineOppositeContent";
import Layout from "../../components/layout";
import Link from "next/link";

export default function CustomizedTimeline() {
  return (
    <Layout>
      <p>
        Scroll through for a detailed timeline of my professional career. If you would like to download my resume instead, <Link href="/documents/chinmay_sawaji.pdf">click here!</Link>
      </p>
      <Timeline
        sx={{
          [`& .${timelineOppositeContentClasses.root}`]: {
            flex: 0.2,
          },
        }}
      >
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            align="right"
            variant="body2"
            color="text.secondary"
          >
            December 2023 - Present
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography variant="h6" component="span">
              Klaviyo
            </Typography>
            
            <p>
            
              Senior Software Engineer
            
            </p>
            <p>
            Building next generation data platform 
            </p>
            </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            align="right"
            variant="body2"
            color="text.secondary"
          >
            June 2022 - Present
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography variant="h6" component="span">
              Alexa Devices
            </Typography>
            
            <p>
            
              Software Engineer
            
            </p>
            <p>
            I am working on services that run on Alexa multi-modal devices. These services respond to device sensor inputs, such as ambient lux sensors, and user inputs, such as touch or wake word, and update the device state. For instance, they can wake up the device or trigger a user configured routine.
            </p>
            <p>
            Contributed feature development and bug fixes for Echo Show 5 Generation 3 (4.5 star rating)
            </p>
            </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            align="right"
            variant="body2"
            color="text.secondary"
          >
            December 2019 - July 2021
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography variant="h6" component="span">
              Alexa Feedback
            </Typography>
            <br />
            <Typography variant="h8" component="span">
              Software Engineer
            </Typography>
            <br />
            <Typography variant="h9" component="span">Helped launch skill ratings program across 11 locales on both headless and multi-modal devices. Skill ratings enable Alexa customers to rate Alexa skills via voice and graphical user interface. Skill ratings provides a frictionless experience to capture ratings which led to an average increase of 2.5 ratings. I helped reach feature parity, drive operational excellence with identifying and implementing stability metrics and driving rollout.</Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            align="right"
            variant="body2"
            color="text.secondary"
          >
            August 2021- May 2022
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography variant="h6" component="span">
              Alexa Feedback
            </Typography>
            <br />
            <Typography variant="h8" component="span">
              Software Engineer
            </Typography>
            <br />
            <Typography variant="h9" component="span">Designed and implemented econometric data pipeline automation which reduced 4 months of manual effort to 1 week of end-to-end automation with in-process validation. Lead a team of 3 engineers to deliver automation over a period of 8 months.</Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            align="right"
            variant="body2"
            color="text.secondary"
          >
            October 2015- November 2019
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography variant="h6" component="span">Alexa Machine Learning Data Platform </Typography>
            <br />
            <Typography variant="h8" component="span">
              Software Engineer
            </Typography>
            <br />
            <Typography variant="h9" component="span">
              <p>
              I designed, implemented, maintained, and expanded data compliance at scale for Alexa customer data. This feature enabled the scalable deletion of source and derived data (e.g., features) when a customer chooses to delete their utterance data from the Alexa app.
              </p>
              <p>
              Data compliance refers to the legal requirements for storing and handling customer data generated by customer interactions with Alexa devices (such as GDPR and HIPAA). This data is used by internal Alexa teams for scientific purposes (such as feature engineering and model training) and business intelligence.
              </p>
              <p>
              I designed a system that indexes all new data generated, keyed on the source data, and performs deletions when requested. I led a team of 3 engineers to deliver this service within 3 months. The major challenges for this project were:                
              </p>
              <ul>
                <li>Spiky traffic patterns, which required the system to be highly scalable.</li>
                <li>The scale of data being generated, which required the system to be efficient.
</li>
                <li>Supporting deletion for a wide variety of formats, which required the system to be flexible.
</li>
              </ul>

            </Typography>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </Layout>
  );
}
