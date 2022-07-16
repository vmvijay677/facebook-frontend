import { Modal, useMantineTheme } from "@mantine/core";
import "./ShareModel.css";
import PostShare from "../PostShare/PostShare";

function ShareModal({ modalOpened, setModalOpened }) {
  const theme = useMantineTheme();

  return (
    <Modal
      overlayColor={
        theme.colorScheme === "dark"
          ? theme.colors.dark[9]
          : theme.colors.gray[2]
      }
      overlayOpacity={0.55}
      overlayBlur={3}
      size="50%"
      opened={modalOpened}
      onClose={() => setModalOpened(false)}
    >
      <h3 className="h3">Share anything!</h3>
      <PostShare />
    </Modal>
  );
}

export default ShareModal;
