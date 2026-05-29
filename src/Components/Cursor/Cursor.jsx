import { useEffect, useRef } from "react";
import "./Cursor.css";

export function Cursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const pos = useRef({ x: 0, y: 0 });
  const rafRef = useRef(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let visible = true;

    // Hide native cursor
    const prevCursor = document.body.style.cursor;
    document.body.style.cursor = "none";

    function onMove(e) {
      pos.current.x = e.clientX;
      pos.current.y = e.clientY;
      // Use left/top so CSS transform (translate(-50%,-50%)) keeps the pointer centered
      dot.style.left = `${pos.current.x}px`;
      dot.style.top = `${pos.current.y}px`;
      ring.style.left = `${pos.current.x}px`;
      ring.style.top = `${pos.current.y}px`;
      visible = true;
      dot.style.opacity = "1";
      ring.style.opacity = "1";
    }

    function onLeave() {
      visible = false;
      dot.style.opacity = "0";
      ring.style.opacity = "0";
    }

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseout", onLeave);
    window.addEventListener("mouseenter", onMove);

    // Smooth follow for the ring
    let rx = 0,
      ry = 0;
    function animate() {
      rx += (pos.current.x - rx) * 0.15;
      ry += (pos.current.y - ry) * 0.15;
      // Position ring using left/top so centering transform remains applied
      ring.style.left = `${rx}px`;
      ring.style.top = `${ry}px`;
      rafRef.current = requestAnimationFrame(animate);
    }
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseout", onLeave);
      window.removeEventListener("mouseenter", onMove);
      cancelAnimationFrame(rafRef.current);
      document.body.style.cursor = prevCursor;
    };
  }, []);

  return (
    <>
      <div className="custom-cursor-dot" ref={dotRef} aria-hidden />
      <div className="custom-cursor-ring" ref={ringRef} aria-hidden />
    </>
  );
}

export default Cursor;
