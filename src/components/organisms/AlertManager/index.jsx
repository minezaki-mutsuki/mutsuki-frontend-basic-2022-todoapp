import React, { useEffect, useState } from "react";
import { useAlertHandlerContext } from "../../../contexts/alert_handler";
import Alert from "../../Atoms/Alert";

const AlertManager = () => {
  const [timeoutHandler, setTimeoutHandler] = useState(null);
  const AlertHandlerContext = useAlertHandlerContext();

  useEffect(() => {
    if (timeoutHandler !== null) {
      window.clearTimeout(timeoutHandler);
    }
    const newTimeoutHandler = window.setTimeout(() => {
      AlertHandlerContext.closeAlert();
      setTimeoutHandler(null);
    }, 5000);
    setTimeoutHandler(newTimeoutHandler);
  }, [AlertHandlerContext]);

  return (
    <Alert
      visible={AlertHandlerContext.visible}
      errorText={AlertHandlerContext.errorText}
    />
  );
};
export default AlertManager;