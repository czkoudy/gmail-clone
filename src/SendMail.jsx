import "./sendMail.css";
import { useForm } from "react-hook-form";
import CloseIcon from "@material-ui/icons/Close";
import { Button } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { closeSendMessage } from "./features/mailSlice";

function SendMail() {
  const { register, handleSubmit, watch, errors } = useForm();

  const dispatch = useDispatch();

  const onSubmit = (data) => {};
  return (
    <div className="sendMail">
      <div className="sendMail__header">
        <h3>New Message</h3>
        <CloseIcon className="sendMail__close" onClick={() => dispatch(closeSendMessage())} />
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" placeholder="To" name="to" ref={register({ required: true })} />
        {errors.to && <p className="sendMail__error">Required</p>}
        <input type="text" placeholder="Subject" name="subject" ref={register({ required: true })} />
        <input type="text" placeholder="Message..." className="sendMail__message" name="message" ref={register({ required: true })} />
        <div className="sendMail__options">
          <Button className="sendMail__send" variant="contained" color="primary" type="submit">
            Send
          </Button>
        </div>
      </form>
    </div>
  );
}

export default SendMail;
