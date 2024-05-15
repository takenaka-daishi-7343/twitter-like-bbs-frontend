import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Input,
} from "@chakra-ui/react";
import { UserModalProps } from "../../types/types";
import { useRef } from "react";
import { useStaticUsername } from "../../stores/store";

export function UserModal({ isOpen, onClose }: UserModalProps) {
  const { username, setUsername } = useStaticUsername();
  const inputRef = useRef<HTMLInputElement>(null);

  const onUpdateName = () => {
    if (inputRef.current) setUsername(inputRef.current.value);
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Username</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Input
              placeholder="Your name"
              defaultValue={username ? username : ""}
              ref={inputRef}
            ></Input>
          </ModalBody>

          <ModalFooter>
            <Button mr={3} onClick={onClose}>
              Close
            </Button>
            <Button
              colorScheme="blue"
              onClick={() => {
                onUpdateName();
                onClose();
              }}
            >
              Submit
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
