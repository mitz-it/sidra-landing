import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LoadingAnimatedSvg, LoadingContainer, LoadingPercentage } from "./Loading.styles";

const Loading: React.FC = () => {
  const navigate = useNavigate();
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPercentage((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          navigate("/timeline"); // redireciona para a rota desejada
          return 100;
        }
        return prev + 1;
      });
    }, 30);

    return () => clearInterval(interval);
  }, [navigate]);

  return (
    <LoadingContainer>
      <LoadingAnimatedSvg />
      <LoadingPercentage>{percentage}%</LoadingPercentage>
    </LoadingContainer>
  );
};

export default Loading;
