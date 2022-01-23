import {
    Button,
} from "react-bootstrap";

export default function Header() {
    return (
        <div className="content__container">
            <div className="richText">
                Create. Engage. Grow.
            </div>
            <div className="description">
                <p>Unlike long 30 - 40 minute podcasts that are created weekly or bi-weekly, Short-form audio can be shared regularly such as an audio blog post or a daily cooking recipe which we help create without manual effort.</p>
            </div>
            <div className="leftSideGradient"></div>
            <div className="rightSideGradient"></div>
            <div className="gettingStarted__action">
                <Button>Get Started</Button>
            </div>
        </div>
    )
}