package restapi.practice.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import restapi.practice.model.Post;

import java.awt.print.Pageable;

@Repository
public interface PostRepository extends JpaRepository<Post, Long> {


}
