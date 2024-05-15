import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  ModalHeader,
} from "@chakra-ui/react";

import { TweetFormModalProps } from "../../types/types";
import { TweetForm } from "./TweetForm";

export function TweetFormModal({ isOpen, onClose }: TweetFormModalProps) {
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />

        <ModalContent>
          <ModalHeader>
            <ModalCloseButton />
          </ModalHeader>
          <ModalBody>
            <TweetForm />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
