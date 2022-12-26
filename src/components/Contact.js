import {useState, useRef, useEffect} from "react";
import {motion, useAnimation, useInView} from "framer-motion";
import IconButton from '@mui/material/IconButton';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Contact() {

    const url = "https://www.linkedin.com/in/andr%C3%A9-gomes-356a71208/";

    const [anchorEl, setAnchorEl] = useState(null);

    const openPopover = (event) => {
        setAnchorEl(event.currentTarget);
        navigator
            .clipboard
            .writeText("angomes.94@gmail.com");
        setTimeout(handleClose, 1000);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open
        ? 'simple-popover'
        : undefined;

    const variants = {
        hidden: {
            opacity: 0,
            transition: {
                ease: "easeIn",
                duration: 1
            }
        },
        visible: {
            opacity: 1,
            transition: {
                ease: "easeIn",
                duration: 1
            }
        }
    };

    const controls = useAnimation();
    const ref = useRef(null);
    const isInView = useInView(ref);

    useEffect(() => {
        isInView ? controls.start("visible") : controls.start("hidden");
    }, [isInView]);

    return (
        <div ref={ref} id="contact" className="container-contacts">
            <motion.div
                initial="hidden"
                animate={controls}
                variants={variants}
                className="container-square-border">
                <h6 className="contacts-title font-roboto-condensed-light">
                    Get in touch
                </h6>
                <div className="wrapper-button">
                    <IconButton size="large" style={{ color: '#0045f6' }} onClick={openPopover} className="icon"><EmailIcon/></IconButton>
                    <IconButton
                        size="large"
                        style={{ color: '#0045f6' }}
                        onClick={() => window.open(url, '_blank', 'noopener,noreferrer')}
                        className="icon"><LinkedInIcon/></IconButton>
                    <Popover
                        id={id}
                        open={open}
                        anchorEl={anchorEl}
                        onClose={handleClose}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'center'
                        }}
                        transformOrigin={{
                            vertical: 'center',
                            horizontal: 'center'
                        }}>
                        <Typography variant="subtitle1">e-mail copied to clipboard</Typography>
                    </Popover>
                </div>
            </motion.div>
        </div>
    );
}

export default Contact;
