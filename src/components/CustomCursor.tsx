import { useMousePosition } from "../util/mouse";

const CustomCursor = () => {
    const { x, y } = useMousePosition();

    return (
        <div
            style={{
                position: "fixed",
                top: y + "px",
                left: x + "px",
                width: "20px",
                height: "20px",
                background: "red",
                borderRadius: "50%",
                transform: "translate(-50%, -50%)",
                pointerEvents: "none", // Ignore events on the cursor itself
            }}
        />
    );
};

export default CustomCursor;